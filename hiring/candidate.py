class Candidate:
    def __init__(self, quality):
        self.quality = quality

    def __eq__(self, other):
        return self.quality == other.quality

    def __lt__(self, other):
        return self.quality < other.quality

    def __cmp__(self, other):
        return self.quality - other.quality
