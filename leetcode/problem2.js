// Add Two numbers https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();

  let curr = dummy;
  let sum = 0;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    const reminder = sum % 10;
    const carry = Math.floor(sum / 10);

    curr.next = new ListNode(reminder);
    sum = carry;
    curr = curr.next;
  }
  if (sum > 0) {
    curr.next = new ListNode(sum);
  }
  return dummy.next;
};
