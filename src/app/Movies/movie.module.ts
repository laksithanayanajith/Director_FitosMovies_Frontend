export interface movieCreationDTO{
    
    name: string,
    year: number,
    genre: string,
    poster_link: any,
    teaser_link: any,
    description: string,
    director_id: number,
    added_date_time: any,
}

export interface movieDTO{

    id: number,
    name: string,
    year: number,
    genre: string,
    poster_link: any,
    teaser_link: any,
    description: string,
    director_id: number,
    added_date_time: any,
}

export interface totalRatingDTO{

    total_rating: any,
}