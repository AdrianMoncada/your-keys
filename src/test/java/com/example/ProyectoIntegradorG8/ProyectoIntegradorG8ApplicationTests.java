package com.example.ProyectoIntegradorG8;

import modelo.Categoria;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import service.inteface.ICategoriaService;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ProyectoIntegradorG8ApplicationTests {

    @Autowired
    private ICategoriaService categoriaService;

    @Test
    public void testCrearCategoria(){
        Categoria categoria = new Categoria("nuevos","Autos fabricados en los últimos 2 años","https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
        categoriaService.crearCategoria(categoria);

        Categoria categoria1 = categoriaService.leerCategoria(1L);

        assertTrue(categoria1 != null);
    }

}
