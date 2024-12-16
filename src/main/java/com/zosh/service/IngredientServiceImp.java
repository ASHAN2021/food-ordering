package com.zosh.service;

import com.zosh.model.IngrediantCategory;
import com.zosh.model.IngrediantsItem;
import com.zosh.repository.IngredientItemRepository;
import com.zosh.repository.IngredientsCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientServiceImp implements IngredientsService{

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private IngredientsCategoryRepository ingredientsCategoryRepository;

    @Override
    public IngrediantCategory createIngredientCategory(String name, Long restaurantId) throws Exception {
        return null;
    }

    @Override
    public IngrediantCategory findIngredientCategoryById(Long id) throws Exception {
        return null;
    }

    @Override
    public List<IngrediantCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        return List.of();
    }

    @Override
    public IngrediantsItem createIngredientsItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        return null;
    }

    @Override
    public List<IngrediantsItem> findRestaurantsIngredients(Long restaurantId) {
        return List.of();
    }

    @Override
    public IngrediantsItem updateStock(Long id) throws Exception {
        return null;
    }
}
