package com.example.capstonefullstackapp.Controller;

import com.example.capstonefullstackapp.Repository.CategoryRepository;
import com.example.capstonefullstackapp.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class CategoryController {

    @Autowired
    CategoryService categoryService;

}
