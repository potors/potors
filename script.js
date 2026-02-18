const tween = KUTE.fromTo("#a",
    { path: "#a" },
    { path: "#b" },
    { repeat: 999, duration: 6000, yoyo: true }
);

tween.start();