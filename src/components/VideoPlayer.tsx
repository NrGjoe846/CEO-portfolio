import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Sparkles,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/audio';

export interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  poster = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80',
  title = 'UNAI TECH — Autonomous Intelligence Engine',
  subtitle = 'Official Architecture & Systems Demo',
  size = 'md',
  autoPlay = false,
  loop = true,
  className = ''
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [duration, setDuration] = useState<string>('0:00');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const hideTimeoutRef = useRef<number | null>(null);

  const formatTime = (timeInSeconds: number): string => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTogglePlay = () => {
    sound.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleToggleMute = () => {
    sound.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const handleToggleFullscreen = () => {
    sound.playClick();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = window.setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      if (hideTimeoutRef.current) window.clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const sizeClasses = {
    sm: 'max-w-2xl min-h-[260px]',
    md: 'max-w-4xl min-h-[380px]',
    lg: 'max-w-6xl min-h-[500px]'
  }[size];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative w-full ${sizeClasses} mx-auto rounded-3xl overflow-hidden bg-[#060b19] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.8)] group select-none ${className}`}
    >
      {/* Ambient Cyber Glow behind the video */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#1d4ed8]/20 via-[#38bdf8]/15 to-[#1d4ed8]/20 blur-2xl pointer-events-none -z-10" />

      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={handleTogglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Top Header Bar Overlay */}
      <div
        className={`absolute top-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-b from-[#060b19]/90 via-[#060b19]/40 to-transparent transition-opacity duration-300 flex items-center justify-between z-20 pointer-events-none ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <div>
            <h4 className="text-white text-sm sm:text-base font-black tracking-wide leading-tight">
              {title}
            </h4>
            <p className="text-[11px] font-mono text-cyan-300 font-bold uppercase">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-black uppercase bg-[#0a1226]/80 text-cyan-300 border border-cyan-400/40">
            4K ULTRA HD
          </span>
        </div>
      </div>

      {/* Center Big Play Trigger (when paused) */}
      {!isPlaying && (
        <button
          type="button"
          onClick={handleTogglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#38bdf8] text-[#060b19] flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-110 active:scale-95 transition-all cursor-pointer z-20 group/btn"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5 group-hover/btn:scale-105 transition-transform" />
        </button>
      )}

      {/* Bottom Controls Bar Overlay */}
      <div
        className={`absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#060b19]/95 via-[#060b19]/80 to-transparent transition-opacity duration-300 z-20 ${
          showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Progress / Scrub Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all mb-4 group/bar overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#1d4ed8] to-[#38bdf8] rounded-full shadow-[0_0_10px_#38bdf8]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={handleTogglePlay}
              className="w-9 h-9 rounded-xl bg-[#0e1a38] text-[#38bdf8] border border-cyan-500/30 hover:bg-[#1d4ed8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isPlaying ? 'Pause' : 'Play'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current translate-x-0.5" />}
            </button>

            {/* Mute Toggle */}
            <button
              type="button"
              onClick={handleToggleMute}
              className="w-9 h-9 rounded-xl bg-[#0e1a38] text-cyan-200 border border-cyan-500/30 hover:bg-[#1d4ed8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Time Indicator */}
            <span className="text-xs font-mono text-cyan-200/80 font-bold">
              {currentTime} <span className="text-cyan-500">/</span> {duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={handleToggleFullscreen}
              className="w-9 h-9 rounded-xl bg-[#0e1a38] text-cyan-200 border border-cyan-500/30 hover:bg-[#1d4ed8] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VideoPlayerSm: React.FC<Omit<VideoPlayerProps, 'size'>> = (props) => (
  <VideoPlayer {...props} size="sm" />
);

export const VideoPlayerMd: React.FC<Omit<VideoPlayerProps, 'size'>> = (props) => (
  <VideoPlayer {...props} size="md" />
);

export const VideoPlayerLg: React.FC<Omit<VideoPlayerProps, 'size'>> = (props) => (
  <VideoPlayer {...props} size="lg" />
);

export default VideoPlayer;
