package com.example.proyectoG8.service.impl;

import com.example.proyectoG8.model.Category;
import com.example.proyectoG8.model.dto.CategoryDTO;
import com.example.proyectoG8.repository.ICategoryRepository;
import com.example.proyectoG8.service.ICategoryService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements ICategoryService {

    private final static Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Autowired
    private ModelMapper mapper;


    @Override
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        logger.info("Creating category: {}", categoryDTO.getTitle());
        Category category = iCategoryRepository.save(mapper.map(categoryDTO, Category.class));
        if(category!= null){
            logger.info("Category {} has been created successfully", categoryDTO.getTitle());
            return mapper.map(category, CategoryDTO.class);
        }
        logger.error("The category {} couldn't be created successfully", categoryDTO.getTitle());
        return null;
    }

    @Override
    public CategoryDTO readCategory(Long id) {
        Optional<Category> category = iCategoryRepository.findById(id);
        CategoryDTO categoryDTO = null;
        if (category.isPresent()){
            logger.info("Category {} was found", category.get().getTitle());
            categoryDTO = mapper.map(category.get(), CategoryDTO.class);
            if (categoryDTO == null){
                logger.error("There was an error mapping the entity");
            }
        }
        return categoryDTO;
    }

    @Override
    public CategoryDTO updateCategory(CategoryDTO categoryDTO) {
        if (categoryDTO.getId_category()!= null){
            Optional<Category> category = iCategoryRepository.findById(categoryDTO.getId_category());
            if (category.isPresent()){
                Category category1 = iCategoryRepository.save(mapper.map(categoryDTO, Category.class));
                return mapper.map(category1, CategoryDTO.class);
            }
        }
        logger.error("There isn't an id, in the given category information");
        return null;
    }

    @Override
    public void deleteCategory(Long id) {
        Optional<Category> category = iCategoryRepository.findById(id);
        if(category.isPresent()){
            logger.info("Deleting category {}", category.get().getTitle());
            iCategoryRepository.deleteById(id);
            logger.info("The category has been deleted successfully");
        }else {
            logger.error("There isn't any category with id: {}", id);
        }
    }

    @Override
    public List<CategoryDTO> listCategory() {
        logger.info("Looking for all categories");
        List<Category> categories = iCategoryRepository.findAll();
        List<CategoryDTO> categoryDTOS = new ArrayList<>();

        for (Category category : categories) {
            categoryDTOS.add(mapper.map(category, CategoryDTO.class));
        }
        return categoryDTOS;
    }
}
