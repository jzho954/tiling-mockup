
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ScrollAnimation from './ScrollAnimation';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  content: string;
  author: string;
  location: string;
  rating: number;
  delay: number;
}

const reviews = [
  {
    content: "Andrew was great to deal with, and we were pleased to have him and his team install a hedge and feature tree for us. After initial delays due to stock issues, the team went full steam ahead and completed the job quickly and professionally. We would absolutely recommend them!",
    author: "Martin",
    location: "West Auckland",
    rating: 5,
  },
  {
    content: "Andrew and the Ground Up Team completed a new driveway with some extra earthworks, retaining walls, gardening, hedge planting, ready lawn and new gates as part of a significant renovation at our property. All the work was completed to a very high standard and professionally with no short cuts taken and the results are outstanding. Very happy with the end result and the quality. Highly recommended.",
    author: "Dhaya",
    location: "West Auckland",
    rating: 5,
  },
  {
    content: "Andrew and the team did a fantastic job on my garden, especially given the mud as a result of this weather. They did everything from fences, retaining and planting. Getting soil. It wasn't the easiest garden to get into but they got it done. Andrew was easy to deal with and kept me in the loop as timings had to change as a result of the weather.",
    author: "Fiona",
    location: "Central Auckland",
    rating: 5,
  },
];

const ReviewCard: React.FC<ReviewCardProps> = ({ content, author, location, rating, delay }) => {
  return (
    <ScrollAnimation animation="fade-in" delay={delay}>
      <Card className="h-full border border-gray-200 shadow-sm overflow-hidden bg-white rounded-lg">
        <CardContent className="pt-6">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 italic mb-6">"{content}"</p>
        </CardContent>
        <CardFooter className="text-base text-gray-800 font-medium flex flex-col items-start">
          <span className="font-bold text-lg">{author}</span>
          <span>{location}</span>
        </CardFooter>
      </Card>
    </ScrollAnimation>
  );
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="uppercase text-green-500 font-semibold tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white hover:bg-green-600 border-none">
            View All Reviews
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
