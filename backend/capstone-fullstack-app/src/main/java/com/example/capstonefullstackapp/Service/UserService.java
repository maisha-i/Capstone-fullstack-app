package com.example.capstonefullstackapp.Service;

import com.example.capstonefullstackapp.Model.Backgrounds;
import com.example.capstonefullstackapp.Model.Category;
import com.example.capstonefullstackapp.Model.Page;
import com.example.capstonefullstackapp.Model.User;
import com.example.capstonefullstackapp.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.DoubleStream;
import java.util.stream.Stream;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

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
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public User addNewCategoryToUser(User user, Category newCategory) {
        user.addNewCategory(newCategory);
        return userRepository.save(user);
    }

    //method has to be called load by username but for us username == email (unique identifier + what a user will use to login)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> record = userRepository.findByEmail(username);

        org.springframework.security.core.userdetails.User.UserBuilder builder = null;
        if (record.isEmpty()){
            throw new UsernameNotFoundException("User not found - " + username);
        }

        User user = record.get();

        builder = org.springframework.security.core.userdetails.User.withUsername(username);
        builder.password(user.getPassword());
        builder.roles("");

        return builder.build();
    }

    public void deleteUserById(Long id) { userRepository.deleteById(id);
    }


    public User updateUser(Long id, User updatedUserDetails) {
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        User oldUser = userRepository.findById(id).get();
        oldUser.setName(updatedUserDetails.getName());
        oldUser.setEmail(updatedUserDetails.getEmail());
        if(updatedUserDetails.getPassword() != null){
        String encodedPassword = encoder.encode(updatedUserDetails.getPassword());
            oldUser.setPassword(encodedPassword);
        }
        return userRepository.save(oldUser);
    }

    public List<Category> getCategoriesByUser(Long userId) {
        User user = userRepository.findById(userId).get();
        return user.getCategories();
    }

    public Long getUserIdByEmail(String email){
        Long id = userRepository.findByEmail(email).get().getId();
        return id;
    }

    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

