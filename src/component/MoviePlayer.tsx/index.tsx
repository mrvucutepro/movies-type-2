import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import Spinner from '../Spinner';

export default function MoviePlayer({
  videoUrl,
  thumbnail,
}: {
  videoUrl: string;
  thumbnail: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
  }, [videoUrl]);

  // useEffect(() => {
  //   if (Hls.isSupported() && videoUrl.endsWith('.m3u8')) {
  //     const hls = new Hls();
  //     if (videoRef.current) {
  //       hls.loadSource(videoUrl);
  //       hls.attachMedia(videoRef.current);
  //     }
  //     return () => {
  //       hls.destroy();
  //     };
  //   } else if (videoRef.current) {
  //     videoRef.current.src = videoUrl;
  //   }
  // }, [videoUrl]);

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return;

    const hls = new Hls({
      debug: true,
    });

    const videoElement = videoRef.current;

    if (Hls.isSupported()) {
      hls.loadSource(videoUrl);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.ERROR, (err) => {
        console.log(err);
      });
    }

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoElement.play();
    });
    return () => {
      hls.destroy();
    };
  }, [videoUrl]);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setError(true);
  };

  if (!videoUrl) {
    return (
      <>
        <div className="mt-4 h-[680px] px-4 items-center flex justify-center text-gray-500">
          Cannot loading movie
        </div>
      </>
    );
  }
  return (
    <div className="mt-4 px-4 relative">
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Spinner size="xl" />
        </div>
      )}
      {error && (
        <div className="flex items-center h-[680px] justify-center bg-black bg-opacity-50">
          <span className="text-red-500 font-bold">Loading video fail</span>
        </div>
      )}
      {!error && (
        <video
          src={videoUrl}
          poster={thumbnail}
          className={`w-[100vw] ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          height="680"
          controls
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
        />
      )}
    </div>
  );
}
