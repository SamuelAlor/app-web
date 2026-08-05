import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise';

const aplicacion = express();
const puerto = Number(process.env.PORT ?? 3000);

const origenes = process.env.ORIGENES_PERMITIDOS
  ? process.env.ORIGENES_PERMITIDOS
      .split(',')
      .map((origen) => origen.trim())
      .filter(Boolean)
  : ['http://localhost:4200'];

aplicacion.use(
  cors({
    origin: origenes,
    credentials: true
  })
);

aplicacion.use(express.json());

const conexion = mysql.createPool({
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 5,
  decimalNumbers: true
});

function validarProducto(datos) {
  const producto = {
    nombre: String(datos.nombre ?? '').trim(),
    descripcion: String(datos.descripcion ?? '').trim(),
    precio: Number(datos.precio),
    categoria_id: Number(datos.categoria_id)
  };

  if (
    !producto.nombre ||
    !producto.descripcion ||
    !Number.isFinite(producto.precio) ||
    producto.precio <= 0 ||
    !Number.isInteger(producto.categoria_id) ||
    producto.categoria_id <= 0
  ) {
    return null;
  }

  return producto;
}

function validarCategoria(datos) {
  const categoria = {
    nombre: String(datos.nombre ?? '').trim(),
    descripcion: String(datos.descripcion ?? '').trim()
  };

  if (!categoria.nombre) {
    return null;
  }

  return categoria;
}

function codigoMysql(error) {
  if (
    typeof error === 'object' &&
    error !== null &&
    typeof error.code === 'string'
  ) {
    return error.code;
  }

  return '';
}

aplicacion.get('/', (_solicitud, respuesta) => {
  respuesta.json({
    mensaje: 'API de productos, categorías y favoritos en funcionamiento.'
  });
});

aplicacion.get('/api/productos', async (solicitud, respuesta) => {
  try {
    const categoriaId = Number(solicitud.query.categoria_id);
    const tieneFiltro = solicitud.query.categoria_id !== undefined;

    if (
      tieneFiltro &&
      (!Number.isInteger(categoriaId) || categoriaId <= 0)
    ) {
      respuesta.status(400).json({
        mensaje: 'La categoría indicada no es válida.'
      });
      return;
    }

    if (tieneFiltro) {
      const [productos] = await conexion.execute(
        `SELECT
          p.id,
          p.nombre,
          p.descripcion,
          p.precio,
          p.categoria_id,
          c.nombre AS categoria_nombre,
          EXISTS(
            SELECT 1
            FROM favoritos f
            WHERE f.producto_id = p.id
          ) AS es_favorito
        FROM productos p
        INNER JOIN categorias c
          ON c.id = p.categoria_id
        WHERE p.categoria_id = ?
        ORDER BY p.id`,
        [categoriaId]
      );

      respuesta.json(productos);
      return;
    }

    const [productos] = await conexion.query(
      `SELECT
        p.id,
        p.nombre,
        p.descripcion,
        p.precio,
        p.categoria_id,
        c.nombre AS categoria_nombre,
        EXISTS(
          SELECT 1
          FROM favoritos f
          WHERE f.producto_id = p.id
        ) AS es_favorito
      FROM productos p
      INNER JOIN categorias c
        ON c.id = p.categoria_id
      ORDER BY p.id`
    );

    respuesta.json(productos);
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible consultar los productos.'
    });
  }
});

aplicacion.get('/api/productos/:id', async (solicitud, respuesta) => {
  try {
    const [productos] = await conexion.execute(
      `SELECT
        p.id,
        p.nombre,
        p.descripcion,
        p.precio,
        p.categoria_id,
        c.nombre AS categoria_nombre,
        EXISTS(
          SELECT 1
          FROM favoritos f
          WHERE f.producto_id = p.id
        ) AS es_favorito
      FROM productos p
      INNER JOIN categorias c
        ON c.id = p.categoria_id
      WHERE p.id = ?`,
      [solicitud.params.id]
    );

    if (productos.length === 0) {
      respuesta.status(404).json({
        mensaje: 'Producto no encontrado.'
      });
      return;
    }

    respuesta.json(productos[0]);
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible consultar el producto.'
    });
  }
});

aplicacion.post('/api/productos', async (solicitud, respuesta) => {
  const producto = validarProducto(solicitud.body);

  if (!producto) {
    respuesta.status(400).json({
      mensaje: 'Los datos del producto no son válidos.'
    });
    return;
  }

  try {
    const [categorias] = await conexion.execute(
      'SELECT id FROM categorias WHERE id = ?',
      [producto.categoria_id]
    );

    if (categorias.length === 0) {
      respuesta.status(400).json({
        mensaje: 'La categoría seleccionada no existe.'
      });
      return;
    }

    const [resultado] = await conexion.execute(
      `INSERT INTO productos
        (nombre, descripcion, precio, categoria_id)
      VALUES (?, ?, ?, ?)`,
      [
        producto.nombre,
        producto.descripcion,
        producto.precio,
        producto.categoria_id
      ]
    );

    respuesta.status(201).json({
      id: resultado.insertId,
      ...producto
    });
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible guardar el producto.'
    });
  }
});

aplicacion.put('/api/productos/:id', async (solicitud, respuesta) => {
  const producto = validarProducto(solicitud.body);

  if (!producto) {
    respuesta.status(400).json({
      mensaje: 'Los datos del producto no son válidos.'
    });
    return;
  }

  try {
    const [categorias] = await conexion.execute(
      'SELECT id FROM categorias WHERE id = ?',
      [producto.categoria_id]
    );

    if (categorias.length === 0) {
      respuesta.status(400).json({
        mensaje: 'La categoría seleccionada no existe.'
      });
      return;
    }

    const [resultado] = await conexion.execute(
      `UPDATE productos
      SET
        nombre = ?,
        descripcion = ?,
        precio = ?,
        categoria_id = ?
      WHERE id = ?`,
      [
        producto.nombre,
        producto.descripcion,
        producto.precio,
        producto.categoria_id,
        solicitud.params.id
      ]
    );

    if (resultado.affectedRows === 0) {
      respuesta.status(404).json({
        mensaje: 'Producto no encontrado.'
      });
      return;
    }

    respuesta.json({
      id: Number(solicitud.params.id),
      ...producto
    });
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible actualizar el producto.'
    });
  }
});

aplicacion.delete('/api/productos/:id', async (solicitud, respuesta) => {
  try {
    const [resultado] = await conexion.execute(
      'DELETE FROM productos WHERE id = ?',
      [solicitud.params.id]
    );

    if (resultado.affectedRows === 0) {
      respuesta.status(404).json({
        mensaje: 'Producto no encontrado.'
      });
      return;
    }

    respuesta.status(204).send();
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible eliminar el producto.'
    });
  }
});

aplicacion.get('/api/categorias', async (_solicitud, respuesta) => {
  try {
    const [categorias] = await conexion.query(
      `SELECT
        c.id,
        c.nombre,
        c.descripcion,
        COUNT(p.id) AS total_productos
      FROM categorias c
      LEFT JOIN productos p
        ON p.categoria_id = c.id
      GROUP BY
        c.id,
        c.nombre,
        c.descripcion
      ORDER BY c.nombre`
    );

    respuesta.json(categorias);
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible consultar las categorías.'
    });
  }
});
aplicacion.get('/api/categorias/:id', async (solicitud, respuesta) => {
  try {
    const [categorias] = await conexion.execute(
    `SELECT id, nombre, descripcion
FROM categorias
WHERE id = ?`
      [solicitud.params.id]
    );

    if (categorias.length === 0) {
      respuesta.status(404).json({
        mensaje: 'Categoría no encontrada.'
      });
      return;
    }

    respuesta.json(categorias[0]);
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible consultar la categoría.'
    });
  }
});

aplicacion.get(
  '/api/categorias/:id/productos',
  async (solicitud, respuesta) => {
    try {
      const [categorias] = await conexion.execute(
        'SELECT id FROM categorias WHERE id = ?',
        [solicitud.params.id]
      );

      if (categorias.length === 0) {
        respuesta.status(404).json({
          mensaje: 'Categoría no encontrada.'
        });
        return;
      }

      const [productos] = await conexion.execute(
        `SELECT
          p.id,
          p.nombre,
          p.descripcion,
          p.precio,
          p.categoria_id,
          c.nombre AS categoria_nombre,
          EXISTS(
            SELECT 1
            FROM favoritos f
            WHERE f.producto_id = p.id
          ) AS es_favorito
        FROM productos p
        INNER JOIN categorias c
          ON c.id = p.categoria_id
        WHERE p.categoria_id = ?
        ORDER BY p.id`,
        [solicitud.params.id]
      );

      respuesta.json(productos);
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({
        mensaje: 'No fue posible consultar los productos de la categoría.'
      });
    }
  }
);

aplicacion.post('/api/categorias', async (solicitud, respuesta) => {
  const categoria = validarCategoria(solicitud.body);

  if (!categoria) {
    respuesta.status(400).json({
      mensaje: 'El nombre de la categoría es obligatorio.'
    });
    return;
  }

  try {
    const [resultado] = await conexion.execute(
      `INSERT INTO categorias (nombre, descripcion)
      VALUES (?, ?)`,
      [categoria.nombre, categoria.descripcion || null]
    );

    respuesta.status(201).json({
      id: resultado.insertId,
      ...categoria
    });
  } catch (error) {
    console.error(error);

    if (codigoMysql(error) === 'ER_DUP_ENTRY') {
      respuesta.status(409).json({
        mensaje: 'Ya existe una categoría con ese nombre.'
      });
      return;
    }

    respuesta.status(500).json({
      mensaje: 'No fue posible guardar la categoría.'
    });
  }
});

aplicacion.put('/api/categorias/:id', async (solicitud, respuesta) => {
  const categoria = validarCategoria(solicitud.body);

  if (!categoria) {
    respuesta.status(400).json({
      mensaje: 'El nombre de la categoría es obligatorio.'
    });
    return;
  }

  try {
    const [resultado] = await conexion.execute(
      `UPDATE categorias
      SET nombre = ?, descripcion = ?
      WHERE id = ?`,
      [
        categoria.nombre,
        categoria.descripcion || null,
        solicitud.params.id
      ]
    );

    if (resultado.affectedRows === 0) {
      respuesta.status(404).json({
        mensaje: 'Categoría no encontrada.'
      });
      return;
    }

    respuesta.json({
      id: Number(solicitud.params.id),
      ...categoria
    });
  } catch (error) {
    console.error(error);

    if (codigoMysql(error) === 'ER_DUP_ENTRY') {
      respuesta.status(409).json({
        mensaje: 'Ya existe una categoría con ese nombre.'
      });
      return;
    }

    respuesta.status(500).json({
      mensaje: 'No fue posible actualizar la categoría.'
    });
  }
});

aplicacion.delete('/api/categorias/:id', async (solicitud, respuesta) => {
  try {
    const [resultado] = await conexion.execute(
      'DELETE FROM categorias WHERE id = ?',
      [solicitud.params.id]
    );

    if (resultado.affectedRows === 0) {
      respuesta.status(404).json({
        mensaje: 'Categoría no encontrada.'
      });
      return;
    }

    respuesta.status(204).send();
  } catch (error) {
    console.error(error);

    if (
      codigoMysql(error) === 'ER_ROW_IS_REFERENCED_2' ||
      codigoMysql(error) === 'ER_ROW_IS_REFERENCED'
    ) {
      respuesta.status(409).json({
        mensaje:
          'No se puede eliminar la categoría porque tiene productos relacionados.'
      });
      return;
    }

    respuesta.status(500).json({
      mensaje: 'No fue posible eliminar la categoría.'
    });
  }
});

aplicacion.get('/api/favoritos', async (_solicitud, respuesta) => {
  try {
    const [favoritos] = await conexion.query(
      `SELECT
        f.id AS favorito_id,
        f.producto_id,
        p.id,
        p.nombre,
        p.descripcion,
        p.precio,
        p.categoria_id,
        c.nombre AS categoria_nombre,
        1 AS es_favorito
      FROM favoritos f
      INNER JOIN productos p
        ON p.id = f.producto_id
      INNER JOIN categorias c
        ON c.id = p.categoria_id
      ORDER BY f.id DESC`
    );

    respuesta.json(favoritos);
  } catch (error) {
    console.error(error);
    respuesta.status(500).json({
      mensaje: 'No fue posible consultar los favoritos.'
    });
  }
});

aplicacion.post('/api/favoritos', async (solicitud, respuesta) => {
  const productoId = Number(solicitud.body.producto_id);

  if (!Number.isInteger(productoId) || productoId <= 0) {
    respuesta.status(400).json({
      mensaje: 'El identificador del producto no es válido.'
    });
    return;
  }

  try {
    const [productos] = await conexion.execute(
      'SELECT id FROM productos WHERE id = ?',
      [productoId]
    );

    if (productos.length === 0) {
      respuesta.status(404).json({
        mensaje: 'Producto no encontrado.'
      });
      return;
    }

    const [resultado] = await conexion.execute(
      `INSERT INTO favoritos (producto_id)
      VALUES (?)`,
      [productoId]
    );

    respuesta.status(201).json({
      id: resultado.insertId,
      producto_id: productoId
    });
  } catch (error) {
    console.error(error);

    if (codigoMysql(error) === 'ER_DUP_ENTRY') {
      respuesta.status(409).json({
        mensaje: 'El producto ya está en favoritos.'
      });
      return;
    }

    respuesta.status(500).json({
      mensaje: 'No fue posible agregar el producto a favoritos.'
    });
  }
});

aplicacion.delete(
  '/api/favoritos/:productoId',
  async (solicitud, respuesta) => {
    try {
      const [resultado] = await conexion.execute(
        'DELETE FROM favoritos WHERE producto_id = ?',
        [solicitud.params.productoId]
      );

      if (resultado.affectedRows === 0) {
        respuesta.status(404).json({
          mensaje: 'El producto no se encuentra en favoritos.'
        });
        return;
      }

      respuesta.status(204).send();
    } catch (error) {
      console.error(error);
      respuesta.status(500).json({
        mensaje: 'No fue posible eliminar el favorito.'
      });
    }
  }
);

aplicacion.use((error, _solicitud, respuesta, _continuar) => {
  console.error(error);

  respuesta.status(500).json({
    mensaje: error.message || 'Ocurrió un error en el servidor.'
  });
});

aplicacion.listen(puerto, '0.0.0.0', () => {
  console.log(`API disponible en el puerto ${puerto}.`);
});
