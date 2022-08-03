package service.inteface;

import modelo.Categoria;

import java.util.Set;

public interface ICategoriaService {

    void crearCategoria(Categoria categoria);
    Categoria leerCategoria(Long id);
    void modificarCategoria(Categoria categoria);
    void eliminarCategoria(Long id);
    Set<Categoria> getTodosCategoria();

}
