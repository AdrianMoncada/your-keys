package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.model.dto.CategoryDTO;
import com.example.proyectoG8.repository.ICategoryRepository;
import com.example.proyectoG8.service.ICategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Autowired
    private ModelMapper mapper;


    @Override
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {

        Category category = iCategoryRepository.save(mapper.map(categoryDTO, Category.class));
        return mapper.map(category, CategoryDTO.class);
    }

    @Override
    public CategoryDTO readCategory(Long id) {

        Optional<Category> category = iCategoryRepository.findById(id);
        CategoryDTO categoryDTO = null;
        if (category.isPresent())
            categoryDTO = mapper.map(category, CategoryDTO.class);
        return categoryDTO;
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) {

        Category category = iCategoryRepository.save(mapper.map(categoryDTO, Category.class));
        return mapper.map(category, CategoryDTO.class);
    }

    @Override
    public void deleteCategory(Long id) {

        iCategoryRepository.deleteById(id);

    }

    @Override
    public List<CategoryDTO> listCategory() {
        List<Category> categories = iCategoryRepository.findAll();
        List<CategoryDTO> categoryDTOS = new ArrayList<>();

        for (Category category : categories) {
            categoryDTOS.add(mapper.map(category, CategoryDTO.class));
        }
        return categoryDTOS;
    }
}
