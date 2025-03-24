
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';

interface ReviewCardProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  delay: number;
}

const reviews = [
  {
    content: "Auckland Tiling transformed our bathroom completely. The attention to detail was impressive, and they finished on time and within budget.",
    author: "Sarah",
    location: "Mt Eden",
    rating: 5,
  },
  {
    content: "Best tilers in Auckland! They installed porcelain tiles throughout our kitchen and living area. Incredibly professional and the result is stunning.",
    author: "Sam",
    location: "Ponsonby",
    rating: 5,
  },
  {
    content: "We had our outdoor patio tiled and the quality of work was exceptional. Highly recommend their services for any tiling project.",
    author: "Mike",
    location: "Remuera",
    rating: 5,
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ content, author, location, rating, delay }) => {
  return (
    <ScrollAnimation animation="fade-in" delay={delay}>
      <Card className="glass-card h-full">
        <CardContent className="pt-6">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 italic">{content}</p>
        </CardContent>
        <CardFooter className="text-sm text-gray-600 font-medium">
          — {author}, {location}
        </CardFooter>
      </Card>
    </ScrollAnimation>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Client Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              content={review.content}
              author={review.author}
              location={review.location}
              rating={review.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
