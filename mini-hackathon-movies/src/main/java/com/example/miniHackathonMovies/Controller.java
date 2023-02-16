package com.example.miniHackathonMovies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Controller {

    private final MovieRepo repo;

    @Autowired
    public Controller(MovieRepo repo) {
        this.repo = repo;
    }

    @PostMapping("/movies")
    public void createMovie(@RequestBody Movie movie) {
        repo.save(movie);
        System.out.println("Received movie: " + movie.getTitle());
    }
}
