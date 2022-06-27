package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PageService {

    @Autowired
    PageRepository pageRepository;

    public Page addNewPage(Page page) {
        return pageRepository.save(page);
    }


}
