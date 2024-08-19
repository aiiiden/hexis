"use client";

import { cn } from "@/lib/utils";

export default function StarHero({
  className,
}: Readonly<{ className?: string }>) {
  const stars = getStars();
  return (
    <div
      role="img"
      className={cn([
        "relative w-fit aspect-square overflow-hidden",
        className,
      ])}
    >
      <Background />
      {stars.map((star, index) => (
        <div
          key={index}
          className={cn([
            index === 0 && "relative animate-none",
            index > 0 && "absolute top-0 left-0 animate-spin",
          ])}
          style={{
            zIndex: index,
            animationDuration: `${30 - index * 5}s`,
            animationTimingFunction: "linear",
            animationDelay: `${index / 2}s`,
          }}
        >
          {star}
        </div>
      ))}
    </div>
  );
}

function Background() {
  return (
    <svg
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full relative"
    >
      <circle
        cx="740"
        cy="740.001"
        r="522.759"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <circle
        cx="740"
        cy="740.001"
        r="522.759"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <circle
        cx="739.952"
        cy="739.953"
        r="306.066"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <circle
        cx="739.952"
        cy="739.952"
        r="92.3685"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <circle
        cx="739.952"
        cy="739.952"
        r="739.452"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <rect
        x="217.241"
        y="217.242"
        width="1045.52"
        height="1045.52"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <rect
        x="740"
        y="0.707107"
        width="1045.52"
        height="1045.52"
        transform="rotate(45 740 0.707107)"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <path
        d="M1263.76 216.242L216.242 1263.76"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
      <path
        d="M216.242 216.242L1263.76 1263.76"
        stroke="#BDBDBD"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

function getStars() {
  return [
    <svg
      key="star-0"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform"
    >
      <path
        d="M1046.48 739.805L1262.96 216.443L739.701 739.702L1046.48 739.805Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.598 432.92L1262.96 216.442L739.701 739.701L739.598 432.92Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.598 1046.48L1262.96 1262.96L739.701 739.701L739.598 1046.48Z"
        fill="#FFA3A3"
      />
      <path
        d="M1046.48 739.597L1262.96 1262.96L739.701 739.701L1046.48 739.597Z"
        fill="#2A2A2A"
      />
      <path
        d="M432.92 739.597L216.442 1262.96L739.701 739.701L432.92 739.597Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.805 1046.48L216.442 1262.96L739.701 739.701L739.805 1046.48Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.805 432.92L216.442 216.442L739.701 739.701L739.805 432.92Z"
        fill="#FFA3A3"
      />
      <path
        d="M432.92 739.805L216.442 216.443L739.701 739.701L432.92 739.805Z"
        fill="#2A2A2A"
      />
    </svg>,
    <svg
      key="star-1"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full transform rotate-45"
    >
      <path
        d="M1046.48 739.805L1262.96 216.443L739.701 739.702L1046.48 739.805Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.598 432.92L1262.96 216.442L739.701 739.701L739.598 432.92Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.598 1046.48L1262.96 1262.96L739.701 739.701L739.598 1046.48Z"
        fill="#FFA3A3"
      />
      <path
        d="M1046.48 739.597L1262.96 1262.96L739.701 739.701L1046.48 739.597Z"
        fill="#2A2A2A"
      />
      <path
        d="M432.92 739.597L216.442 1262.96L739.701 739.701L432.92 739.597Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.805 1046.48L216.442 1262.96L739.701 739.701L739.805 1046.48Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.805 432.92L216.442 216.442L739.701 739.701L739.805 432.92Z"
        fill="#FFA3A3"
      />
      <path
        d="M432.92 739.805L216.442 216.443L739.701 739.701L432.92 739.805Z"
        fill="#2A2A2A"
      />
    </svg>,
    <svg
      key="star-2"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M1046.48 739.805L1262.96 216.443L739.701 739.702L1046.48 739.805Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.598 432.92L1262.96 216.442L739.701 739.701L739.598 432.92Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.598 1046.48L1262.96 1262.96L739.701 739.701L739.598 1046.48Z"
        fill="#FFA3A3"
      />
      <path
        d="M1046.48 739.597L1262.96 1262.96L739.701 739.701L1046.48 739.597Z"
        fill="#2A2A2A"
      />
      <path
        d="M432.92 739.597L216.442 1262.96L739.701 739.701L432.92 739.597Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.805 1046.48L216.442 1262.96L739.701 739.701L739.805 1046.48Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.805 432.92L216.442 216.442L739.701 739.701L739.805 432.92Z"
        fill="#FFA3A3"
      />
      <path
        d="M432.92 739.805L216.442 216.443L739.701 739.701L432.92 739.805Z"
        fill="#2A2A2A"
      />
    </svg>,
    <svg
      key="star-3"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M739.588 866.854L956.629 956.629L739.631 739.631L739.588 866.854Z"
        fill="#FFA3A3"
      />
      <path
        d="M866.856 739.588L956.631 956.629L739.633 739.631L866.856 739.588Z"
        fill="#2A2A2A"
      />
      <path
        d="M612.408 739.588L522.633 956.629L739.631 739.631L612.408 739.588Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.675 866.854L522.634 956.629L739.632 739.631L739.675 866.854Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.675 612.408L522.634 522.633L739.632 739.631L739.675 612.408Z"
        fill="#FFA3A3"
      />
      <path
        d="M612.408 739.673L522.633 522.632L739.631 739.63L612.408 739.673Z"
        fill="#2A2A2A"
      />
      <path
        d="M866.856 739.673L956.631 522.632L739.633 739.63L866.856 739.673Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.588 612.408L956.629 522.633L739.631 739.631L739.588 612.408Z"
        fill="#2A2A2A"
      />
    </svg>,
    <svg
      key="star-4"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M739.591 792.259L829.412 829.412L739.608 739.608L739.591 792.259Z"
        fill="#FFA3A3"
      />
      <path
        d="M792.259 739.591L829.412 829.412L739.608 739.609L792.259 739.591Z"
        fill="#2A2A2A"
      />
      <path
        d="M686.957 739.591L649.804 829.412L739.608 739.609L686.957 739.591Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.626 792.259L649.804 829.412L739.608 739.608L739.626 792.259Z"
        fill="#2A2A2A"
      />
      <path
        d="M739.627 686.958L649.805 649.805L739.609 739.609L739.627 686.958Z"
        fill="#FFA3A3"
      />
      <path
        d="M686.956 739.626L649.803 649.804L739.607 739.608L686.956 739.626Z"
        fill="#2A2A2A"
      />
      <path
        d="M792.258 739.626L829.411 649.804L739.608 739.608L792.258 739.626Z"
        fill="#FFA3A3"
      />
      <path
        d="M739.59 686.958L829.411 649.805L739.608 739.609L739.59 686.958Z"
        fill="#2A2A2A"
      />
    </svg>,
    <svg
      key="star-5"
      width="1480"
      height="1480"
      viewBox="0 0 1480 1480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <path
        d="M718.331 740.16L702.922 777.412L740.167 740.167L718.331 740.16Z"
        fill="#FFA3A3"
      />
      <path
        d="M740.175 762.003L702.922 777.412L740.167 740.167L740.175 762.003Z"
        fill="#2A2A2A"
      />
      <path
        d="M740.175 718.331L702.922 702.922L740.167 740.167L740.175 718.331Z"
        fill="#FFA3A3"
      />
      <path
        d="M718.331 740.174L702.922 702.922L740.167 740.167L718.331 740.174Z"
        fill="#2A2A2A"
      />
      <path
        d="M762.003 740.174L777.412 702.922L740.167 740.167L762.003 740.174Z"
        fill="#FFA3A3"
      />
      <path
        d="M740.159 718.331L777.412 702.922L740.167 740.167L740.159 718.331Z"
        fill="#2A2A2A"
      />
      <path
        d="M740.159 762.003L777.412 777.412L740.167 740.167L740.159 762.003Z"
        fill="#FFA3A3"
      />
      <path
        d="M762.004 740.16L777.413 777.412L740.168 740.167L762.004 740.16Z"
        fill="#2A2A2A"
      />
    </svg>,
  ];
}
