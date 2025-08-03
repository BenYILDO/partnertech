"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  repeat = true,
  repeatDelay = 3000,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
  repeat?: boolean;
  repeatDelay?: number;
}) => {
  const [key, setKey] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Tüm metni birleştir
  const fullText = words.map(word => word.text).join(" ");

  useEffect(() => {
    if (!isTyping) return;

    const typingSpeed = 100; // Her harf için 100ms
    
    const timer = setTimeout(() => {
      if (currentCharIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else {
        setIsTyping(false);
        // Tekrar etme
        if (repeat) {
          setTimeout(() => {
            setDisplayedText("");
            setCurrentCharIndex(0);
            setIsTyping(true);
            setKey(prev => prev + 1);
          }, repeatDelay);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, fullText, isTyping, repeat, repeatDelay]);

  // Reset when key changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentCharIndex(0);
    setIsTyping(true);
  }, [key]);

  const renderTypedText = () => {
    return (
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight whitespace-nowrap">
        {displayedText.split("").map((char, index) => {
          // Kelime renklerini uygula
          let charClass = "dark:text-white text-black";
          let charPosition = 0;
          
          for (let i = 0; i < words.length; i++) {
            const wordLength = words[i].text.length;
            if (index >= charPosition && index < charPosition + wordLength) {
              charClass = cn("dark:text-white text-black", words[i].className);
              break;
            }
            charPosition += wordLength + 1; // +1 for space
          }
          
          return (
            <motion.span
              key={`${key}-char-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className={charClass}
            >
              {char}
            </motion.span>
          );
        })}
      </span>
    );
  };

  return (
    <div className={cn("flex justify-center items-end my-6 w-full", className)}>
      <div className="flex justify-center items-end">
        {renderTypedText()}
        <motion.span
          key={`cursor-${key}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 0.8,
            times: [0, 0.1, 0.9, 1],
            repeat: Infinity,
            repeatType: "loop",
          }}
          className={cn(
            "block rounded-sm w-[2px] sm:w-[3px] md:w-[4px] h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 2xl:h-14 bg-blue-500 flex-shrink-0 ml-1",
            cursorClassName
          )}
        ></motion.span>
      </div>
    </div>
  );
};