package service.impl;

import modelo.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import repository.ICategoriaRepository;
import service.inteface.ICategoriaService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class CategoriaService implements ICategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;


    @Override
    public void crearCategoria(Categoria categoria) {

        categoriaRepository.save(categoria);

    }

    @Override
    public Categoria leerCategoria(Long id) {

        Categoria categoria = null;
        if (categoriaRepository.findById(id).isPresent()){
            categoria = categoriaRepository.findById(id).get();
        }

        return categoria;
    }

    @Override
    public void modificarCategoria(Categoria categoria) {

        categoriaRepository.save(categoria);

    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);

    }

    @Override
    public Set<Categoria> getTodosCategoria() {

        List<Categoria> categoriasLista = categoriaRepository.findAll();
        Set<Categoria> categorias = new HashSet<>();

        for (Categoria categoria : categoriasLista) {
            categorias.add(categoria);
        }

        return categorias;

    }

}
