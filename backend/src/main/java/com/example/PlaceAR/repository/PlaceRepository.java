package com.example.PlaceAR.repository;

import com.example.PlaceAR.dto.PlaceDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;

import java.util.List;


@EnableJpaRepositories
public interface PlaceRepository extends JpaRepository<PlaceDTO, Integer> {
    PlaceDTO findByName(String name);

    @Query(value = "SELECT * FROM placedto WHERE lat BETWEEN :minlat AND :maxlat AND lng BETWEEN :minlng AND :maxlng", nativeQuery = true)
    List<PlaceDTO> findByLatBetweenAndLngBetween(@Param("minlat") double minlat, @Param("maxlat") double maxlat, @Param("minlng") double minlng, @Param("maxlng") double maxlng);

    //List<PlaceDTO> findByLatBetweenAndLngBetween(Double minlat, Double maxlat, Double minlng, Double maxlng);
}
