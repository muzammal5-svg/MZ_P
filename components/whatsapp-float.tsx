"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WhatsAppFloatProps {
  phoneNumber: string // WhatsApp number in international format (e.g., "923001234567")
  message?: string // Optional pre-filled message
}

export function WhatsAppFloat({ 
  phoneNumber, 
  message = "Hi! I'm interested in your services. Let's discuss my project!" 
}: WhatsAppFloatProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [showChatBubble, setShowChatBubble] = useState(false)

  // Show the button after a delay and then show chat bubble
  useEffect(() => {
    const showButtonTimer = setTimeout(() => setIsVisible(true), 2000)
    const showBubbleTimer = setTimeout(() => setShowChatBubble(true), 4000)
    const hideBubbleTimer = setTimeout(() => setShowChatBubble(false), 10000)
    
    return () => {
      clearTimeout(showButtonTimer)
      clearTimeout(showBubbleTimer) 
      clearTimeout(hideBubbleTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Hide chat bubble after click
    setShowChatBubble(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* WhatsApp Float Button */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1
        }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative">
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" style={{ animationDelay: '1s' }}></div>
          
          {/* Main button */}
          <motion.button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => {
              setIsHovered(true)
              setShowChatBubble(false)
            }}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl transition-all duration-300 ease-out hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
            aria-label="Contact me on WhatsApp"
            title="Chat with me on WhatsApp"
          >
            {/* Real WhatsApp Icon SVG */}
            <motion.svg 
              animate={{ 
                rotate: isHovered ? [0, -10, 10, -5, 0] : 0,
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
              className="h-9 w-9"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
            </motion.svg>
            
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </motion.button>
          
          {/* Hover Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-4 pointer-events-none"
              >
                <div className="relative whitespace-nowrap rounded-xl glass border border-white/20 px-4 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>Chat on WhatsApp</span>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-full right-4">
                    <div className="border-8 border-transparent border-t-white/20"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat bubble with message preview */}
          <AnimatePresence>
            {showChatBubble && !isHovered && (
              <motion.div 
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute bottom-0 right-full mr-4 pointer-events-none"
              >
                <div className="relative max-w-xs rounded-2xl glass border border-white/20 p-4 text-sm text-white shadow-xl backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center p-1"
                      >
                        <img 
                          src="/MZwebsolution.png" 
                          alt="MZ" 
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-primary mb-1">Muzammal</div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 leading-relaxed"
                      >
                        👋 Hi! Need help with web development? Let's chat!
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xs text-gray-400 mt-2 flex items-center gap-1"
                      >
                        <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                        Typically replies instantly
                      </motion.div>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="absolute top-6 left-full">
                    <div className="border-8 border-transparent border-l-white/20"></div>
                  </div>
                  
                  {/* Close button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation()
                      setShowChatBubble(false)
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center text-white text-xs transition-colors pointer-events-auto"
                  >
                    ×
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification badge */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: showChatBubble ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes whatsapp-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }
        
        .animate-whatsapp-pulse {
          animation: whatsapp-pulse 2s infinite;
        }
        
        @media (max-width: 768px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-pulse,
          .animate-whatsapp-pulse {
            animation: none;
          }
        }
      `}</style>
    </>
  )
}