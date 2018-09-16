#! /bin/bash

for AUDIO_FILE in $(ls ./samples_directory); do
  meyda --format=json --o=./features/$AUDIO_FILE.json samples_directory/$AUDIO_FILE rms zcr chroma spectralCentroid spectralFlatness
done;
