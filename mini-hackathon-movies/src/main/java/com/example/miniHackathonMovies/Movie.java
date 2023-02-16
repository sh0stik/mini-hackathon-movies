package com.example.miniHackathonMovies;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String year;
    private String rated;
    private String released;
    private String runtime;
    private String genre;
    private String director;
    private String writer;
    private String actors;
    private String plot;
    private String language;
    private String country;
    private String awards;
    private String rottenTomatoesRating;
    @Lob
    @Column(name = "image", length = 1000)
    private byte[] image;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Movie movie)) return false;
        return Objects.equals(getId(), movie.getId()) && Objects.equals(getTitle(), movie.getTitle())
                && Objects.equals(getYear(), movie.getYear()) && Objects.equals(getRated(), movie.getRated())
                && Objects.equals(getReleased(), movie.getReleased()) && Objects.equals(getRuntime(), movie.getRuntime())
                && Objects.equals(getGenre(), movie.getGenre()) && Objects.equals(getDirector(), movie.getDirector())
                && Objects.equals(getWriter(), movie.getWriter()) && Objects.equals(getActors(), movie.getActors())
                && Objects.equals(getPlot(), movie.getPlot()) && Objects.equals(getLanguage(), movie.getLanguage())
                && Objects.equals(getCountry(), movie.getCountry()) && Objects.equals(getAwards(), movie.getAwards())
                && Objects.equals(getRottenTomatoesRating(), movie.getRottenTomatoesRating());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getTitle(), getYear(), getRated(), getReleased(), getRuntime(), getGenre(),
                getDirector(), getWriter(), getActors(), getPlot(), getLanguage(), getCountry(), getAwards(),
                getRottenTomatoesRating());
    }
}
