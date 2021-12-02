/**
 * @jest-environment jsdom
 */
import { showResults } from "./helpers"
import isServerLive from "./isServerLive"

test('isServerLive fn doesn\'t throw error with and without argument', () => {
  expect(() => isServerLive(document.body)).not.toThrow(Error)
  expect(() => isServerLive()).not.toThrow(Error)
})

test('showResults functions work', () => {
  expect(showResults({ confidence: '94', score_tag: 'NEU', subjectivity: 'SUBJECTIVE', agreement: 'DISAGREEMENT', irony: 'NONIRONIC' })).toBe(`<h3>Results</h3><p>Confidence Score: <span>94%</span></p><p>Polarity: <span>Neutral</span></p><p>Subjectivity: <span>SUBJECTIVE</span></p><p>Agreement: <span>DISAGREEMENT</span></p><p>Irony: <span>NONIRONIC</span></p>`)
})