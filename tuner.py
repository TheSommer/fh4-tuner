import sys

arguments = len(sys.argv) - 1
if(arguments == 3):
    front_ratio = float(sys.argv[1])
    back_ratio = 1 - front_ratio
    min_value = float(sys.argv[2])
    max_value = float(sys.argv[3])

    front_setting = (max_value - min_value) * front_ratio + min_value
    back_setting = (max_value - min_value) * back_ratio + min_value

    print("front:\t" + str(front_setting))
    print("back:\t" + str(back_setting))
else:
    print("front_ratio, min_value, max_value")
