package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PageService {

    @Autowired
    PageRepository pageRepository;

    public List<Page> getAllPages() {
        return pageRepository.findAll();
    }

    public Page addNewPage(Page page) {
        return pageRepository.save(page);
    }

    public Page getPage(Long id) {
        return pageRepository.findById(id).orElse(null);
    }

    public void deletePage (Page page){
        pageRepository.deleteById(page.getId());
    }


    public void savePage(Page page) {
        pageRepository.save(page);
    }
}
