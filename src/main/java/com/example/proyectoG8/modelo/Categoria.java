package com.example.proyectoG8.modelo;

import javax.persistence.*;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_categorias;

    @Column
    private String titulo;

    @Column
    private String descripcion;

    @Column
    private String UrlImagen;

    public Long getId_categorias() {
        return id_categorias;
    }

    public void setId_categorias(Long id_categorias) {
        this.id_categorias = id_categorias;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImagen() {
        return UrlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        UrlImagen = urlImagen;
    }
}
