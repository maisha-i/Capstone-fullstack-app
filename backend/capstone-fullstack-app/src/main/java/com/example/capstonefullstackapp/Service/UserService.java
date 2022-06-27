package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addNewUser(User user) {
        return userRepository.save(user);
    }

    public User addNewCategoryToUser(User user, Category newCategory) {
        user.addNewCategory(newCategory);
        return userRepository.save(user);
    }

}
