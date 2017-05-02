class HiringResult:
    def __init__(self, hiredCount, interviewedCount):
        self.cost = 10e4 * hiredCount + 10e2 * interviewedCount
        self.count = interviewedCount
