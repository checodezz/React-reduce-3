import "./App.css";

//1. Given an array of objects, write a React component to display the total word count of blog posts on "Food".

const Blog = ({ blogPosts }) => {
  const wordCount = blogPosts.reduce((acc, curr) => {
    if (curr.category === "Food") {
      return acc + curr.content.split(" ").length;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Word Count</h2>
      <p>{wordCount}</p>
      <hr />
    </div>
  );
};

//2. Given an array of objects, write a React component to display the total price of laptops.

const Laptops = ({ laptops }) => {
  const totalPrice = laptops.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of Laptops</h2>
      <p>$ {totalPrice}</p>
      <hr />
    </div>
  );
};

//3. Given an array of objects, write a React component to display the average rating of "cafes".

const Cafe = ({ cafes }) => {
  const totalRatings = cafes.reduce((acc, curr) => acc + curr.rating, 0);
  const avgRating = totalRatings / cafes.length;

  return (
    <div>
      <h2>Average Ratings of Cafes</h2>
      <p>{avgRating.toFixed(2)}</p>
      <hr />
    </div>
  );
};

//4. Given an array of objects, write a React component to display the total number of pages of all books.
const Books = ({ books }) => {
  const noOfPages = books.reduce((acc, curr) => acc + curr.pages, 0);

  return (
    <div>
      <h2>Total No of Pages</h2>
      <p>{noOfPages}</p>
      <hr />
    </div>
  );
};

//5. Given an array of objects, write a React component to display the total likes on Morning tweets and total likes on Evening tweets separately.
const Tweet = ({ tweets }) => {
  const morningLikes = tweets.reduce((acc, curr) => {
    return curr.schedule === "Morning tweet" ? acc + curr.likes : acc;
  }, 0);

  const eveningLikes = tweets.reduce((acc, curr) => {
    return curr.schedule !== "Morning tweet" ? acc + curr.likes : acc;
  }, 0);

  return (
    <div>
      <h2>Likes Count</h2>
      <p>Total Likes on Morning Tweets: {morningLikes}</p>
      <p>Total Likes on Evening Tweets: {eveningLikes}</p>
      <hr />
    </div>
  );
};

//6. Given an array of objects, write a React component to display the total number of listeners of "verified" podcasts.

const Podcast = ({ podcasts }) => {
  const verifiedCount = podcasts.reduce((acc, curr) => {
    return curr.type === "verified" ? acc + curr.listeners : acc;
  }, 0);

  return (
    <div>
      <h2>Verified Listeners</h2>
      <p>{verifiedCount}</p>
    </div>
  );
};

export default function App() {
  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },
    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },
    {
      id: 3,
      title: "Blog Post 3",
      content: "Content 3",
      category: "Technology",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content: "New content of food called Content 4",
      category: "Food",
    },
  ];
  const laptops = [
    { id: 1, brand: "Dell", price: 8999.99 },
    { id: 2, brand: "HP", price: 7999.99 },
    { id: 3, brand: "MacBook", price: 12999.99 },
  ];

  const cafes = [
    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },
    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },
    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },
    { id: 4, name: "Me and U", rating: 4.3, type: "restaurant" },
  ];

  const books = [
    { id: 1, title: "Book 1", pages: 300 },
    { id: 2, title: "Book 2", pages: 250 },
    { id: 3, title: "Book 3", pages: 400 },
  ];

  const tweets = [
    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },
    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },
    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },
    { id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },
  ];

  const podcasts = [
    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },
    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },
    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },
  ];

  return (
    <main>
      <Blog blogPosts={blogPosts} />
      <Laptops laptops={laptops} />
      <Cafe cafes={cafes} />
      <Books books={books} />
      <Tweet tweets={tweets} />
      <Podcast podcasts={podcasts} />
    </main>
  );
}
