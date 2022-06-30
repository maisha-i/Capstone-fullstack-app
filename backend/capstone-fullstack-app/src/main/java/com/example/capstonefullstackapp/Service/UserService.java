package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Backgrounds;
import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.DoubleStream;
import java.util.stream.Stream;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User addNewUser(User user) {
        Category toDoList = new Category("To Do List", new ArrayList<>(), user);
        Page newPage = new Page("My first to do", null, Backgrounds.WHITE, toDoList);
        toDoList.addNewPageToCategory(newPage);
        user.addNewCategory(toDoList);
        return userRepository.save(user);
    }

    public User addNewCategoryToUser(User user, Category newCategory) {
        user.addNewCategory(newCategory);
        return userRepository.save(user);
    }

    public void deleteUserById(Long id) { userRepository.deleteById(id);
    }


    public User updateUser(Long id, User updatedUserDetails) {
        User oldUser = userRepository.findById(id).get();
        oldUser.setName(updatedUserDetails.getName());
        oldUser.setEmail(updatedUserDetails.getEmail());
        oldUser.setPassword(updatedUserDetails.getPassword());
        return userRepository.save(oldUser);
    }

    public List<Category> getCategoriesByUser(Long userId) {
        User user = userRepository.findById(userId).get();
        return user.getCategories();
    }
}
