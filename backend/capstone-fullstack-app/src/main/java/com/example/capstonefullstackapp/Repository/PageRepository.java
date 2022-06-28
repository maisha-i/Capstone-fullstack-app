package com.example.capstonefullstackapp.Repository;

import com.example.capstonefullstackapp.Model.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PageRepository extends JpaRepository<Page, Long>{
    void deletePageById(Long id);
}
