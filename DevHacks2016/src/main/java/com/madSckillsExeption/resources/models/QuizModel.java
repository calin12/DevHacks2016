package com.madSckillsExeption.resources.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode
public class QuizModel {

    private Long id;

    private String level;

    private String name;

    private String authorName;

    private Long authorId;

    private String subjectName;

    private String imageLink;

    private Long rewardPoints;
}
