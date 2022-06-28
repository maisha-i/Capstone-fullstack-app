package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Repository.PageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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


    public Page updatePage(Long id, Page updatedPageInfo) {
        Page oldPage = pageRepository.findById(id).get();
        oldPage.setTitle(updatedPageInfo.getTitle());
        oldPage.setContent(updatedPageInfo.getContent());
        oldPage.setBackground(updatedPageInfo.getBackground());
        return pageRepository.save(oldPage);
    }
}
