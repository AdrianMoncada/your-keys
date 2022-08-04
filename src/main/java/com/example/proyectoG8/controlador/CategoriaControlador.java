package com.example.proyectoG8.controlador;


import com.example.proyectoG8.modelo.Categoria;
import com.example.proyectoG8.servicio.ICategoriaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categoria")
public class CategoriaControlador {
    @Autowired
    private ICategoriaServicio categoriaServicio;

    @GetMapping("/{id}")
    public ResponseEntity<?> buscarCategoria(@PathVariable Long id){
        return new ResponseEntity(categoriaServicio.leerCategoria(id), HttpStatus.FOUND);
    }

    @PostMapping
    public ResponseEntity<?> agregarCategoria(@RequestBody Categoria categoria){
        return new ResponseEntity(categoriaServicio.guardarCategoria(categoria), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> actualizar(@RequestBody Categoria categoria){
        return new ResponseEntity(categoriaServicio.actualizarCategoria(categoria), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id){
        categoriaServicio.eliminarCategoria(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> buscarTodasCategorias(){
        return new ResponseEntity(categoriaServicio.listarCategorias(),HttpStatus.OK);
    }





}
