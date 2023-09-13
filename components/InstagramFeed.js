"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function InstagramFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
          try {
            const response = await axios.get(
              `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQWRQdG9Da25lbU1BNnJvS1pSVzMxQlhNZA2hHN0JWYUtzemlUbjRCNWk2VkQ2bzVBbTctVVBtMi1HUXhYODM1RFFZAT19BWDRUbnJTLUpxVmxkSXBBMnhhUWlTSk1Ea182Y1RJclZASaGlSRUp4VUdkVks0bEpROE0ZD`
            );
            setPosts(response.data.data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <div className="instagram-feed">
          {posts.map((post) => (
            <div className="ig-post" key={post.id}>
              <img src={post.media_url} alt={post.caption} />
            </div>
          ))}
        </div>
      );
}