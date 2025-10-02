'use client';

import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('@/components/atoms/video-player'), { ssr: false });

interface Props {
  videoLink: string;
}

export default function LaunchVideo({ videoLink }: Props) {
  return <VideoPlayer src={videoLink} />;
}