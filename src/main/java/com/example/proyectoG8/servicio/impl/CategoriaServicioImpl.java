package com.example.proyectoG8.servicio.impl;

import com.example.proyectoG8.modelo.Categoria;
import com.example.proyectoG8.repositorio.ICategoriaRepositorio;
import com.example.proyectoG8.servicio.ICategoriaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaServicioImpl implements ICategoriaServicio {

    @Autowired
    private ICategoriaRepositorio categoriaRepositorio;

    @Override
    public Categoria guardarCategoria(Categoria categoria) {
        return categoriaRepositorio.save(categoria);
    }

    @Override
    public Categoria leerCategoria(Long id) {
        Categoria categoria = null;
        if (categoriaRepositorio.findById(id).isPresent()){
            categoria = categoriaRepositorio.findById(id).get();
        }

        return categoria;
    }

    @Override
    public Categoria actualizarCategoria(Categoria categoria) {
        return categoriaRepositorio.save(categoria);
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepositorio.deleteById(id);
    }

    @Override
    public List<Categoria> listarCategorias() {
        return categoriaRepositorio.findAll();
    }
}
