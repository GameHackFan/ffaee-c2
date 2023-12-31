*----------------------------------------------------------------------------------------------
* Title:        FFAEE-C2 Immortal Enemy Bug Fix
* Written by:   GameHackFan
* Date:
* Description:  Fixes Holly Wood, El Gado and Rolento immortal bug.
*----------------------------------------------------------------------------------------------

  JMP         $75A00.L                  ; Code to jump to the new code that fixes the immortal bug (replace 35D5E).

; ORG         $75A00

                                        ; Block of code that handles the increase of the health.
  TST.W       ($18, A6)                 ; Compares 0 and ($18 + A6), the character health.
  BGE         $75A10                    ; If it is 0 or bigger, ignore the 2 lines below.
  MOVE.W      #$402, ($2, A6)           ; Stores 400 inside ($2 + A6), character action / posture id.
  CLR.W       ($4, A6)                  ; Clears ($2 + A6), it is what the original game does.
  MOVE.L      ($E, A6), ($A, A6)        ; Code from the original game that was replaced to jump to this code.
  JMP         $35D64                    ; Goes back to the original code.



  JMP         $75A20.L                  ; Code to jump to the new code that fixes the immortal bug (replace 49B22).

; ORG         $75A20

                                        ; Block of code that handles the increase of the health.
  TST.W       ($18, A6)                 ; Compares 0 and ($18 + A6), the character health.
  BGE         $75A30                    ; If it is 0 or bigger, ignore the 2 lines below.
  MOVE.W      #$402, ($2, A6)           ; Stores 400 inside ($2 + A6), character action / posture id.
  CLR.W       ($4, A6)                  ; Clears ($2 + A6), it is what the original game does.
  MOVE.L      ($E, A6), ($A, A6)        ; Code from the original game that was replaced to jump to this code.
  JMP         $49B28                    ; Goes back to the original code.