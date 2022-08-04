package com.example.proyectoG8.servicio;

import com.example.proyectoG8.modelo.Categoria;

import java.util.List;

public interface ICategoriaServicio {

    public Categoria guardarCategoria(Categoria categoria);

    public Categoria leerCategoria(Long id);

    public Categoria actualizarCategoria(Categoria categoria);

    public void eliminarCategoria(Long id);

    public List<Categoria> listarCategorias();
}
