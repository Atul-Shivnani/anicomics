import { useEffect, useState } from "react";
import Link from "next/link";

const LikeAndBag = () => {
  const [bagCount, setBagCount] = useState<number>(0);

  useEffect(() => {
    // Function to fetch the initial bag count
    const fetchInitialBagCount = async () => {
      try {
        const response = await fetch("/api/Counts/bagCount");
        const data = await response.json();
        console.log('Initial count data:', data);

        // Assuming data is a number directly
        if (typeof data === 'number') {
          setBagCount(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching initial bag count:", error);
      }
    };

    // Fetch the initial count
    fetchInitialBagCount();

    // Set up SSE
    const eventSource = new EventSource("/api/Counts/bagUpdates");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received data:', data);
      
      // Assuming data is a number directly
      if (typeof data === 'number') {
        setBagCount(data);
      } else {
        console.error("Unexpected data format:", data);
      }
    };

    eventSource.onerror = (error) => {
      console.error("Failed to connect to SSE endpoint:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  console.log('Current bag count:', bagCount);

  return (
    <div className="flex justify-around items-center space-x-4 mr-2">
      <div>
        <Link href="/api/auth/signin">
          <img src="/like.png" alt="like" className="h-8" title="Liked" />
        </Link>
      </div>
      <div className="relative">
        <Link href={"/bag"}>
        <img
          src="/bag.png"
          alt="bag"
          className="h-8 cursor-pointer"
          title="Bag"
        />
        {bagCount > 0 && (
          <div className="absolute -top-2 -right-2 bg-orange-400 rounded-full px-2 py-1 text-xs">
            {bagCount}
          </div>
        )}
        </Link>
       
      </div>
    </div>
  );
};

export default LikeAndBag;
