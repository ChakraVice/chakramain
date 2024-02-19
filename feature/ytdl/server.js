const express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');

const app = express();

const BASE_PATH = `https://www.youtube.com/watch?v=`;

// 静的ファイルの提供（index.htmlを提供する）
app.use(express.static(path.join(__dirname, 'public')));

app.get('/download', async (req, res) => {
    const youtubeId = req.query.id;
    if (!youtubeId) {
        return res.status(400).json({ error: 'YouTube video ID is required' });
    }

    try {
        const url = BASE_PATH + youtubeId;
        const videoInfo = await ytdl.getInfo(url);

        const video = ytdl(url, { filter: format => format.container === 'mp4' });

        res.setHeader('Content-disposition', `attachment; filename="${youtubeId}.mp4"`);
        video.pipe(res);
    } catch (err) {
        console.error('Error downloading video:', err);
        res.status(500).json({ error: 'Failed to download video' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//©psannetwork