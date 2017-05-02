import random
from .hiringResult import HiringResult
from .candidate import Candidate

class Hiring:
    def __init__(self):
        pass

    @staticmethod
    def process(candidates):
        current_hired = candidates[0]
        count_hired = 1

        for candidate in candidates:
            if candidate > current_hired:
                current_hired = candidate
                count_hired += 1

        return HiringResult(count_hired, len(candidates))

    @staticmethod
    def generatePseudoData(length):
        lists = random.sample(range(1, length + 1), length)
        return [Candidate(quality) for quality in lists]
    