import { defineComponent, computed } from '@vue/composition-api'
import play from '~/assets/img/play/speaker-filled-audio-tool_59284.svg'
import Scrollable from '~/components/Scrollable/Scrollable.vue'
import { audioBus, EVENTS } from '~/service/audioBus'
import { PROVIDER } from '~/constants/constant'

import containerData from '../containerData'

export default defineComponent({
  name: 'VocabularyContainer',
  components: {
    Scrollable,
  },
  setup: () => {
    const data = computed(() => containerData.data)

    const handlePlay = (key: string) => {
      if (!key) {
        return
      }
      audioBus.emit({
        type: EVENTS.PLAY_AUDIO,
        id: PROVIDER.VOCABULARY,
        params: {
          key,
        },
      })
    }

    return {
      icon: {
        play,
      },
      data,
      handlePlay,
    }
  },
})