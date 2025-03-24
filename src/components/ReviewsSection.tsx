
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  delay: number;
}

const reviews = [
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
      <Card className="h-full border border-gray-200 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-lg text-gray-700 italic">{content}</p>
        </CardContent>
        <CardFooter className="text-base text-gray-600 font-medium">
          — {author}, {location}
        </CardFooter>
      </Card>
    </ScrollAnimation>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-4xl md:text-5xl mb-16">Client Reviews</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
