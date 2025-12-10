# 1. Usar um atalho para gravar minha voz
# 2. Transcrever o áudio para texto em português.
# 3. De posse desse texto, quero jogar em uma LLM;.
# 4. De posse de uma resposta da llm eu quero utilizar um modelo de TTS (Api OpenAI)

import openai
from dotenv import load_dotenv, find_dotenv
from pynput import keyboard
import sounddevice as sd

load_dotenv(find_dotenv())
client = openai.Client()

class TalkingLLM():
    def __init__(self):
        self.is_recording = False,
        self.audio_data = []
        self.samplerate=44100,
        self.channels=1,
        self.dtype='int16',

    def start_or_stop_recording(self):
        pass

    def create_agent(self):
        pass

    def save_and_transcribe(self):
        pass

    def convert_and_play(self):
        pass

    def run(self):
        print("Estou rodando")

        def callback(indata, frame_count, time_info, status):
            if self.is_recording:
                self.audio_data.extend(indata.copy())

        with sd.InputStream(
                samplerate=self.samplerate,
                channels=self.channels,
                dtype=self.dtype,
                callback=callback):
            
            def on_activate():
                self.start_or_stop_recording()
        
            def for_canonical(f):
                return lambda k: f(l.canonical(k))

            hotkey = keyboard.HotKey(
                keyboard.HotKey.parse("<ctrl>+<alt>+h"),
                on_activate)
            with keyboard.Listener(
                    on_press=for_canonical(hotkey.press),
                    on_release=for_canonical(hotkey.release)) as l:
                l.join()
        
        
if __init__ == "__main__":
Talking_llm = Talking()
talking_llm.run()