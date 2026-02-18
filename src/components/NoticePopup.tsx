import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, AlertTriangle, Info, ChevronRight } from "lucide-react";

const notices = [
  {
    id: 1,
    type: "urgent" as const,
    title: "4th Graduation Ceremony",
    message: "The provisional list of graduands for the 4th Graduation Ceremony has been published. Please verify your details on the student portal.",
    date: "Feb 18, 2026",
    link: "#",
  },
  {
    id: 2,
    type: "info" as const,
    title: "September 2026 Intake – Applications Open",
    message: "Applications for the September 2026/2027 academic year are now open for undergraduate and postgraduate programmes.",
    date: "Feb 15, 2026",
    link: "https://apply.tmu.ac.ke/",
  },
  {
    id: 3,
    type: "info" as const,
    title: "Webinar: Beyond Commoditization",
    message: "Join us on Feb 27 for a webinar on 'Towards a People-Centered East Africa Community' featuring Dr. Elifuraha Laltaika.",
    date: "Feb 14, 2026",
    link: "#",
  },
  {
    id: 4,
    type: "urgent" as const,
    title: "Fee Payment Deadline",
    message: "All continuing students are reminded that fee payment for Semester 2 is due by March 1, 2026. Late registration attracts a penalty.",
    date: "Feb 10, 2026",
    link: "#",
  },
];

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleClose = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  return (
    <>
      {/* Floating bell button when popup is closed */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-tmu-red text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tmu-gold text-[10px] font-bold font-body flex items-center justify-center text-accent-foreground">
            {notices.length}
          </span>
        </motion.button>
      )}

      {/* Popup panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-md bg-card rounded-2xl shadow-2xl border overflow-hidden"
            >
              {/* Header */}
              <div className="bg-tmu-gradient px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-primary-foreground" />
                  <h3 className="font-display font-bold text-primary-foreground text-lg">
                    University Notices
                  </h3>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Notices list */}
              <div className="max-h-80 overflow-y-auto divide-y">
                {notices.map((notice, i) => (
                  <motion.a
                    key={notice.id}
                    href={notice.link}
                    target={notice.link.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="block px-5 py-4 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        notice.type === "urgent" ? "bg-tmu-red/10" : "bg-tmu-blue/10"
                      }`}>
                        {notice.type === "urgent" ? (
                          <AlertTriangle className="w-4 h-4 text-tmu-red" />
                        ) : (
                          <Info className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-body font-semibold text-sm text-foreground truncate group-hover:text-tmu-red transition-colors">
                            {notice.title}
                          </h4>
                          <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0 group-hover:text-tmu-red transition-colors" />
                        </div>
                        <p className="text-xs text-muted-foreground font-body line-clamp-2">
                          {notice.message}
                        </p>
                        <span className="text-[10px] text-muted-foreground/70 font-body mt-1 block">
                          {notice.date}
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-secondary/30 border-t">
                <a href="/news" className="text-xs font-body font-semibold text-tmu-red hover:underline flex items-center gap-1">
                  View all notices <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NoticePopup;
