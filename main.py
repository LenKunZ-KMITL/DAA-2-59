from hiring import Hiring
import matplotlib.pyplot as plt

if __name__ == '__main__':
    LIMIT = 10000
    SAMPLE_COUNT = 150

    RESULTS = []
    DICT = {}

    for index in range(1, LIMIT + 1):
        CANDIDATES = Hiring.generatePseudoData(SAMPLE_COUNT)
        RESULTS.append(Hiring.process(CANDIDATES))


    for result in RESULTS:
        if DICT.get(result.cost) is None:
            DICT[result.cost] = 1
        else:
            DICT[result.cost] += 1

    PAIRS = list(DICT.items())

    PAIRS.sort(key=lambda x: x[0])

    KEYS = [pair[0] for pair in PAIRS]
    VALUES = [pair[1] for pair in PAIRS]

    plt.plot(KEYS, VALUES)
    plt.ylabel('Occourance')
    plt.xlabel('Cost')
    plt.show()
