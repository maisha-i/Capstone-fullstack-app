package com.example.capstonefullstackapp.Repository;

import com.example.capstonefullstackapp.Model.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PageRepository extends JpaRepository<Page, Long>{
    void deletePageById(Long id);

    @Query(value = "SELECT CATEGORY_ID FROM PAGES WHERE ID = ?1", nativeQuery = true)
    public Optional<Long> getCategoryId(Long pageId);
}
