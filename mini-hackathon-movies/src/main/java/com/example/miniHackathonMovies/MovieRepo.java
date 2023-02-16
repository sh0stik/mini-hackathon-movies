package com.example.miniHackathonMovies;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MovieRepo extends JpaRepository<Movie, Long> {

}
